import { Area } from "../repo/models/area";
import { Gym } from "../repo/models/gym";

import { Op } from 'sequelize';
import { City } from "../repo/models/city";
import { Country } from "../repo/models/country";

interface GymList {
    count: number,
    rows: Gym[]
}

export async function getGymList(query: string = undefined): Promise<GymList> {
    let whereQuery;
    if (query) {
        whereQuery = {
            name: {
                [Op.like]: `%${query}%`
            }
        }
    }

    const gyms = await Gym.findAndCountAll({
        where: whereQuery,
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        },
        include: [{
            model: Area,
            required: true,
            attributes: ['name'],
            include: [{
                model: City,
                required: true,
                attributes: ['name'],
                include: [{
                    model: Country,
                    required: true,
                    attributes: ['name']
                }]
            }]
        }]
    })

    return gymListMapper(gyms);
}

function gymListMapper(data: GymList): GymList {
    data.rows.map(((Gym: Gym) => {
        const gym = Gym.get();
        gym.address = [gym.address, gym.area.name,gym.area.city.name, gym.area.city.country.name].join(', ');
        delete gym.area;
        delete gym.areaId
        return gym;
    }));

    return data;
}