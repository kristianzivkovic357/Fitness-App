import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';


const hasDigits = new RegExp('\\d');
const hasNonDigits = new RegExp('[^0-9]');

export function containsDigits(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
       registerDecorator({
           name: 'containsDigits',
           target: object.constructor,
           propertyName: propertyName,
           options: validationOptions,
           validator: {
               validate(value: any, args: ValidationArguments) {
                   return hasDigits.test(value);
               }
           }
       });
  };
}

export function containsNonDigitChars(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
         registerDecorator({
             name: 'containsDigits',
             target: object.constructor,
             propertyName: propertyName,
             options: validationOptions,
             validator: {
                 validate(value: any, args: ValidationArguments) {
                     return hasNonDigits.test(value);
                 }
             }
         });
    };
}