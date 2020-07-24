import web3 from './web3';
import CampaignFactory from './build/BalesFactory.json';
// for rinkeby 0x2deF15153251DbB9b3C189907c99b44c4BCd13E1  and in bales create page
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x2deF15153251DbB9b3C189907c99b44c4BCd13E1'
);

export default instance ;
