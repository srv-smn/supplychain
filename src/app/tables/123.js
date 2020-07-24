const rows = [
  {
    _id: "56cf587fe46adb3b8960afe2",
    price: 2000,
    title: "ps3",
    url: "www.google.com",
  }, {
    _id: "56db2bd434df9046e0643d22",
    price: 499,
    title: "HENRIKSDAL",
    url: "http://www.ikea.com/se/sv/catalog/products/S59847817/",
  }
];

var Hello = React.createClass({
  renderRow(props) {
    return (
      <tr>
        <td>{ props._id }</td>
        <td>{ props.price }</td>
        <td>{ props.title }</td>
        <td>{ props.url }</td>
      </tr>
    );
  },

  render: function() {
    return (
      <table>
        { this.props.rows.map(this.renderRow) }
      </table>
    );
  }
});

ReactDOM.render(
  <Hello rows={rows} />,
  document.getElementById('container')
);
Working Fiddle https://jsfiddle.net/zwdjmozn/1/

share  improve this ans



























  async renderRow(props) {

     const stak = await factory.methods.stakeholders(this.state.add).call();
     const campaign = Campaign(props);
     const summary = await campaign.methods.getSummary().call();

     console.log("summary",summary);
     console.log("summary[3]" , summary[3]);
 return (
   <tr>
     <td className="py-1">
       {props}
     </td>
     <td> {stak[2]} </td>
     <td>
       {summary[0]}
     </td>
     <td> $ 77.99 </td>
     <td> May 15, 2015 </td>
   </tr>
 );
}
