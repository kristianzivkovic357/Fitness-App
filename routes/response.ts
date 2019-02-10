'use strict';

interface Success {
    data: SuccessBody;
}

interface SuccessBody {
    items?: any;
    value?: any;
}

interface FailBody {
    error?: any;
    errors?: any;
}

export class APIResponse {
  static success (data: any) {
    const obj: Success = {data: {}};

    if (Array.isArray(data)) {
      obj.data.items = data;
    } else if (data && typeof data === 'object') {
      Object.assign(obj.data, data);
    } else {
      obj.data.value = data;
    }

    return obj;
  }

  static error (code: number, message: string, errors?: any) {
    const obj: FailBody = {
      error: {
        code: code,
        message: message
      }
    };

    if (errors !== null) { // allow anything here, not just Arrays
      obj.errors = errors;
    }

    return obj;
  }
}
