import React from 'react'
import Search from '../../Companents/Search'




export default function chaires(props) {
       let chaires = [
        {
          id: "c1",
          title: "Shankar Linden Linen Effect Natural Dining Chair in Pairr",
          name:"ChairesImages/111.jpg",
          brands: "Shankar Furniture",
          dimensions: "H87.5sm x W47sm x D55sm",
          description: "Linden Linen Effect Natural Dining Chair in Pair has been designed to bring class into any modern or contemporary dining room settings. It is classically upholstered in natural linen effect with a curved back to look fabulous into any dining room space. This dining chair comes with black metal cross frame legs.",
          price:"$186.20"
        },
        {
          id: "c2",
          title: "Home Junction Odette Grey 6 Recliner Chair",
          name:"ChairesImages/222.jpeg",
          brands: "Home Junction",
          dimensions: "W59cm x D71cm x H108cm",
          description: "A stunning full round weave on the top of the arm gives a great looking contrast and is complimented with brushed aluminum styled feet. The grey cushions are premium quality, super thick and will make sure you spend many a lazy weekend not wanting to leave your garden. The rising table also has the contrast weave around the top and bottom and a full weave underneath the glass.",
          price:"$1600"
        },
        {
          id: "c3",
          title: "Furniture Line Uno Mulberry Dining Chair in Pair",
          name:"ChairesImages/333.jpg",
          brands: "Furniture Line",
          dimensions: "H89cm x W59cm x D60cm",
          description: "Uno Mulberry Dining Chair is a must to add to any dining table as it brings that much needed flair and style to your dining experience. A carver chair which is contemporary in its styling, Sumptuous dressed in its velvet fabric and strong standing on its pyramid base. Three delicious colours are available, on trend Grey, cool blue and vibrant Citron all of which will add a touch of glamour and designer style to your dining table.",
          price:"$370.50"
        },
        {
          id: "c4",
          title: "Furniture Line Portland Painted Slat Back Dining Chair in Pair",
          name:"ChairesImages/444.jpg",
          brands: "Furniture Line",
          dimensions: "W 44cm x D 53cm x H 101cm",
          description: "Portland Painted Dining Chair with a Slat back design and finished with an oak seat. The dining chair will take centre stage in your dining space as it demands attention. The dining chair has been manufactured from high quality wooden material and will perfectly blend with your existing dining chairs. The audience of course are the guests who delight in its beauty and strength and applaud its grace and versatility.",
          price:"$386.10"
        }]
  return (
    <div>
        <div className='main'>
        <Search arr={chaires} add={props.onAdd} changeModal={props.changeModal}/>
           </div>
    </div>
  )
}
