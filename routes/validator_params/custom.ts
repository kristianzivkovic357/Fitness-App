import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { isArray } from 'util';

export function IsNumberArray(validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsNumberArray',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any[], args: ValidationArguments) {
          if(!isArray(value)) {
            return false;
          }

          for(const i in value) {
            if(typeof value[i] !== 'number') {
              return false;
            }
          }

          return true;
        }
      }
    });
  };
}


