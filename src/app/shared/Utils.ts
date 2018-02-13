
export class Utils {
  public static dateToISOString(dateObject: Date): string {
    return dateObject.getFullYear() + '-' + (dateObject.getMonth() + 1) + '-' + dateObject.getDate();
  }
}
