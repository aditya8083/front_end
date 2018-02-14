export class ApiLinks {
  public static searchBase = 'http://10.177.7.81:8083/flight/search';
  public static flightDetailsBase = 'http://10.177.7.81:8083/flight/detail';
  public static flightCreateBooking = 'http://10.177.7.81:8083/createBooking';
  public static makePaymentUrl = 'http://10.177.7.81:8083/payment/card/makePayment';
  public static bookingHistoryBaseUrl = 'http://10.177.7.81:8083/booking/superPnr';


  // public static searchBase = 'http://localhost:8083/flight/search';
  // public static flightDetailsBase = 'http://localhost:8083/flight/detail';
  // public static flightCreateBooking = 'http://localhost:8083/booking/createBooking';
  // public static makePaymentUrl = 'http://localhost:8083/payment/card/makePayment';

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


