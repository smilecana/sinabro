export class Logger {
  public  log(msg: any): void {
    console.log(`${msg}`, '123');
  }

  public error(msg: any): void {
    console.error(msg);
  }

  public  warn(msg: any): void {
    console.warn(msg);
  }
}
