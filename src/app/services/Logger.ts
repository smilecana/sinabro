export class Logger {
  public  log(msg: any): void {
    console.log(`${msg}`, 'log');
  }

  public error(msg: any): void {
    console.log(`${msg}`, 'error');
  }

  public  warn(msg: any): void {
    console.log(`${msg}`, 'warn');
  }
}
