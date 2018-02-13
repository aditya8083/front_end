
export class Utils {
  public static dateToISOString(dateObject: Date): string {
    return dateObject.getFullYear() + '-' + (dateObject.getMonth() + 1) + '-' + dateObject.getDate();
  }

  public static getLogo(airline: string) {
    if (airline === 'AI') {
      return 'https://logos-download.com/wp-content/uploads/2016/04/Air_India_logo_logotype_emblem.png';
    } else if (airline === 'IN') {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IndiGo_Airlines_logo.svg/2000px-IndiGo_Airlines_logo.svg.png';
    } else {
      return 'https://en.tiket.com/assets_version/cardamom/dist/images/tiketcom.png';
    }
  }
}
