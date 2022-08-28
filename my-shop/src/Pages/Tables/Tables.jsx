import React from 'react'
import Items from '../../Companents/Itemes'

export default function Tables(props) {
      let tables = [ {
        id: "t1",
        title: "Baumhaus La Reine Mahogany Nest of Three Tables",
        name:"TablesImages/111.jpg",
        brands: "Baumhaus Beds and Furniture",
        dimensions: "Large table: H48cm x W62cm x D46 cm, Medium table: H42cm x W46cm x D39 cm, Small table: H34cm x W31cm x D31 cm",
        description: "La Reine Mahogany Nest of Three Tables is hand crafted from solid mahogany, with a distressed light brown finish. Finished to exceptional standards using a mid gloss lacquer, offering durability whilst maintaining the natural beauty of the wood. Classic designs with a contemporary edge to suit any home. Beautifully crafted, carved fluted legs and decorative side panelling give exquisite detail to this stunning piece.",
        price:"$430.00"
      },
      {
        id: "t2",
        title: "Birlea Furniture Highgate Cream and Oak Dining Table with Bench Set",
        name:"TablesImages/222.jpg",
        brands: "Birlea furniture",
        dimensions: "Dining Table: H78.5cm x W118cm x D85cm, Dining Bench: H45cm x W106cm x D35cm",
        description: "Inspired by classic farmhouse furniture the Highgate range has been designed to complement both modern and traditional homes. The Highgate range is modern, practical, affordable furniture which looks fantastic too. This is an elegant dining table that will look beautiful in your dining room or even your kitchen. The beauty of a table and bench set-up is that you can squeeze plenty of people in, making it perfect for families as well as those who enjoy entertaining.",
        price:"$266.00"
      },
      {
        id: "t3",
        title: "Home Junction Iris Grey Rattan Rounding Dining Table with Ice Bucket and 6 Armchairs",
        name:"TablesImages/333.jpg",
        brands: "Home Junction",
        dimensions: "Chair: W59cm x D71cm x H89cm, Table: Diameter 140cm x H74cm",
        description: "This is a classic shaped dining table with 6 comfortable armchairs. The chairs have high backs, curved arms and an elegant weave over the back and armrest. This set is made with an aluminium frame and our premium round grey rattan which will withstand our British weather of rain, wind and sun. The grey cushions are premium quality and are super comfortable. The sturdy dining table has got the same elegant weave around the edge of the table as the armchairs and has a full weave underneath the 5mm tempered glass top. The table needs a little bit of self-assembly but is easy to put together.",
        price:"$2,097.90"
      },
      {
        id: "t4",
        title: "Furniture Line Bronx Grey Extending Dining Table Only",
        name:"TablesImages/444.jpg",
        brands: "Furniture Line",
        dimensions: "Table Closed: H76cm x W 160cm x D 90cm, Table Open: H76cm x W 200cm x D 90cm",
        description: "Add a new striking aesthetic to your home with the Bronx designer extending table. This fabulous table has been designed by experts to combine contemporary styling with functionality. A great table for a busy household as it holds a central easy glide extender offering additional space for entertaining. The top is designed to look like wood but with added SmarTops® Technology (heat, stain and scratch resistance). The cross design of the substantial base is expertly executed giving a clean image and that statement piece long desired for your dining space.",
        price:"$778.05"
      }]
  return (
    <div>
        <div className='main'>
    {tables.map(el => (
        <Items item={el} key={el.id} add={props.onAdd} changeModal={props.changeModal}/>
    ))}
</div>
    </div>
  )
}
