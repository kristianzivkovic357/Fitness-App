import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { ValidCurrencies } from '../utils/enums';
import { AssetValues } from '../api/v1/currency/currency.model';
import { volumeChangeAllowedAssets, valueChangeAllowedAssets } from '../data_types/suggestion';
import { currency } from '../data_types/currency';

export function validCurrencies(validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      name: 'validCurrencies',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (value) {
            const arr = value.split(',');

            for (const i in arr) {
              const currency = arr[i];
              if (isNaN(+ValidCurrencies[currency])) {
                return false;
              }
            }
          }

          return true;
        }
      }
    });
  };
}

export function validValue(validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      name: 'validValue',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string, args: ValidationArguments) {
          if (AssetValues[value] === AssetValues.MMU) {
            return true;
          }

          return false;
        }
      }
    });
  };
}

export function suggestionVolume(validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      name: 'suggestionVolume',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string, args: ValidationArguments) {
          if (volumeChangeAllowedAssets[value]) {
            return true;
          }
          return false;
        }
      }
    });
  };
}

export function suggestionValue(validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      name: 'suggestionValue',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string, args: ValidationArguments) {
          if (valueChangeAllowedAssets[value]) {
            return true;
          }
          return false;
        }
      }
    });
  };
}

export function isValidCurrency(validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      name: 'isValidCurrency',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string, args: ValidationArguments) {
          if (ValidCurrencies[value]) {
            return true;
          }
          return false;
        }
      }
    });
  };
}

export function isVolumeAsset(assetFieldName: string, assetId: number, validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      name: 'isVolumeAsset',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [assetFieldName, assetId],
      validator: {
        validate(value: string, args: ValidationArguments) {
          const [assetFieldName, assetId] = args.constraints;
          const assetFieldValue = (args.object as any)[assetFieldName];

          if (volumeChangeAllowedAssets.ANCH === volumeChangeAllowedAssets[assetFieldValue]) {
            if (!isNaN(+value) && +value <= 100 && +value >= 0) {
              return true;
            }
            return false;
          } else {
            if (value) { // should not have value
              return false;
            }
            return true;
          }
        }
      }
    });
  };
}

export function isValueAsset(assetFieldName: string, assetId: number, validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      name: 'isValueAsset',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [assetFieldName, assetId],
      validator: {
        validate(value: string, args: ValidationArguments) {
          const [assetFieldName, assetId] = args.constraints;
          const assetFieldValue = (args.object as any)[assetFieldName];

          if (valueChangeAllowedAssets.ANCH === valueChangeAllowedAssets[assetFieldValue]) {
            if (currency[value]) {
              return true;
            }
            return false;
          } else {
            if (value) { // should not have value
              return false;
            }
            return true;
          }
        }
      }
    });
  };
}

export function sumsUpWith(assetFieldName: string, sum: number, validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      name: 'sumsUpWith',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [assetFieldName, sum],
      validator: {
        validate(value: string, args: ValidationArguments) {
          const [assetFieldName, sum] = args.constraints;
          const assetFieldValue = (args.object as any)[assetFieldName];

          if (Number(value) + Number(assetFieldValue) === sum) {
            return true;
          }
          return false;
        }
      }
    });
  };
}


