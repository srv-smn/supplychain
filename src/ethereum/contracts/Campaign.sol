pragma solidity ^0.4.18;
// stake holder count
// hacking   0xE6c4dBfBedbb345dc719C93B4079510D1a0788D3
// In UI owner address pr click kro to owner info show kro
// deploying on ganache remember to change address in factory and create bales
contract BalesFactory{
     // address[] public deployedBales ; // stores all the batch created on the platform
      address public owner ;            // address of the owner of the platform ie. central authority
      mapping(address => stakeholder) public stakeholders; // address mapped with stake holders profile
      mapping(address => bool) public idCreated;    // Kyc verified address has created the profile or not
      mapping(address => address[]) public log ;    // the batch of bales linked with each stake holders
      mapping(string => address)  addfrmuid ;
      // uid mapped with stake holders profile
      // get address of all stake holder
      // add a new variable for verification flag
      struct stakeholder{ // stake holder
        string uid;
        string location;
        string name;
      }
      function addFrmUid(string memory _add) public  view returns(address)
      {
          return addfrmuid[_add];
      }

      function removeOwnerMain(address ad)public {
          address[] storage temp = log[ad];
          delete temp[temp.length-1];
            temp.length--;
            log[ad] = temp ;

      }

      function createStakeholders( address stk ,string _uid , string _location , string _name) public onlyOwner { // creating profile for stake holder
          stakeholder memory newstakeholder = stakeholder({
              uid : _uid,
              location : _location,
              name : _name
          });
          stakeholders[stk] = newstakeholder;
          idCreated[stk] = true;
          addfrmuid[_uid] = stk;
      }

     function addBales(address _sender , address cntrct ) public {//for below contract
         log[_sender].push(cntrct);

      }


      function createBales(string memory _details, address _by ) public {  // stake holders creating bales batch
          require(idCreated[msg.sender]);
          address newBales = new Bales(_details ,msg.sender, _by);
         // deployedBales.push(newBales);
          log[msg.sender].push(newBales);
      }

      function getDeployedBales(address _ad) public view returns (address[]) { // get all bales linked with each profile
          return log[_ad] ;
      }

       function isEligible(address _ad) public view returns(bool) { // checking if the stake holder is eligible of not
           return idCreated[_ad];
       }

    function notEligible(string memory _id) public onlyOwner { // checking if the stake holder is eligible of not
        address ad = addFrmUid(_id);
            idCreated[ad]= false ;
       }



      function BalesFactory() public { // constructor to set up owner
        owner = msg.sender;
      }

      modifier onlyOwner() { // modifier for only owner
          require(msg.sender==owner );
          _;
      }







}


contract Bales { // function and data related to bales

  string public details; //details
  address public owner ; // current owner of the batch
  address public origin ; //place of origin of the bales
  bool public destination ; // if the bales reached to its destination
  address[] public ownerships;  // all the owners of the batch
  uint[] public dates; // time at which ownership was transfered
  BalesFactory by; // for above reference
   mapping(address => bool) public validated ;
  // constructor
  // transfer_ownership
  // getSummary
  // finalize
  // adding modifiers
  modifier restricted() {
      require(msg.sender==owner);
      _;
  }

  function Bales(string memory _details ,address ad, address _by) public { // constructor
         by = BalesFactory(_by);  // https://medium.com/@blockchain101/calling-the-function-of-another-contract-in-solidity-f9edfa921f4c
         require(by.isEligible(ad));
      details = _details;
      owner = ad;
      origin = ad;
      destination = false;
      validated[ad] = true;
      ownerships.push(owner);
      dates.push(now);

  }


  function transfer_ownership( string memory _sendto_ ) public restricted { // transfering the ownership
    address _sendto = by.addFrmUid(_sendto_);
    require(by.isEligible(_sendto));
    require(validated[msg.sender]);
    require(!destination);
    owner = _sendto;
    ownerships.push(owner);
    dates.push(now);
    by.addBales(_sendto, this);


  }
  function conformValidity() public restricted{
       validated[msg.sender] =true;

  }

  function removeOwner() public restricted{
      delete ownerships[ownerships.length-1];
      ownerships.length--;
      delete dates[dates.length-1];
      dates.length--;
      by.removeOwnerMain(owner);
      owner = ownerships[ownerships.length-1];

  }


  function finalise() public restricted {
    destination = true;
  }

  function getSummary() public view returns (
    string, address,address ,bool, address[] , uint[]
    ) {
    return (
      details,
      owner,
      origin,
      destination,
      ownerships,
      dates
      );
    }

}
