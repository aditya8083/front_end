export class ApiLinks {
  // public static searchBase = 'http://10.177.7.81:8083/flight/search';
  // public static flightDetailsBase = 'http://10.177.7.81:8083/flight/detail';
  // public static flightCreateBooking = 'http://10.177.7.81:8083/createBooking';
  public static makePaymentUrl = 'http://10.177.7.81:8083/card/makePaymentUrl';


  public static searchBase = 'http://demo4749284.mockable.io/flight/search';
  public static flightDetailsBase = 'https://demo4749284.mockable.io/flight/detail';
  public static flightCreateBooking = 'https://demo4749284.mockable.io/createBooking';


  public static addParams(url: string, map: Object) {
    if (Object.keys(map).length > 0) {
      return url + '?' + Object.keys(map).map(key => {
        return [key, map[key]].map(encodeURIComponent).join('=');
      }).join('&');
    } else {
      return url;
    }
  }



}


