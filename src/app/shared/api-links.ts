export class ApiLinks {
  public static searchBase = 'http://10.177.7.81:8082/flight/search';

  // public static searchBase = 'http://localhost:8081/booking/search/flight/test';

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


