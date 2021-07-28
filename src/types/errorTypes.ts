enum ServiceErrorCode {
  default,
  notExistent,
  wrongPassword,
}

export class ServiceError {
  public code: number = ServiceErrorCode.default;
  public message: string = "";

  public notExistent() {
    this.code = ServiceErrorCode.notExistent;
    this.message = "Not existent entry";
  }

}

enum ConfigErrorCode {
  default,
}

export class ConfigError {
  public code: number = ConfigErrorCode.default;
  public message: string = "";
}

export const service = new ServiceError();
