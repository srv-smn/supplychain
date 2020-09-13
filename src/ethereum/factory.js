import web3 from './web3';
import CampaignFactory from './build/BalesFactory.json';
// for rinkeby 0x2deF15153251DbB9b3C189907c99b44c4BCd13E1  and in bales create page
// 0xdb62207c995AB52391eb6A18633a1b48B3b3FB26 for ganache
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x465628f53AB6E03d1F29E1fd1a34E8C838Df1D7F'
);

export default instance ;
