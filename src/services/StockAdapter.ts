

export class StockAdapter {

  static async request(offset: number, limit: number) {
    const response: Response = await fetch(`https://fininfo.iqoption.com/api/companies?limit=${limit}&candles=d1&offset=${offset}&order[key_numbers.capitalization]=DESC`);

    if (response.status === 200) {
      try {
        return response.json();
      } catch (e) {
        throw new Error('Error on try parse response');
      }
    } else {
      throw new Error('Error on execute response');
    }
  }

}
