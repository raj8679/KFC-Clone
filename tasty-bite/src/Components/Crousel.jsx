import { Carousel } from 'react-carousel-minimal';

function CarouselComponent() {
 const data = [
    {
      image: "https://images.ctfassets.net/wtodlh47qxpt/4gztBB8yAvtp6jV7JAuLD/093fddbb77a78a44a4d3d5e066c592de/KFC_Peri_Peri_Banner__1440x396px.jpg?w=1600&fit=fill&fm=webp",
    //   caption: "San Francisco"
    },
    {
      image: "https://images.ctfassets.net/wtodlh47qxpt/7p3qmgJkZyxS0SrYR3ApGT/5a28aaf50d424fa816f6d058d9086904/KFC_Celebration_Bucket_Banner__1440x396px.jpg?w=1600&fit=fill&fm=webp",
    //   caption: "Scotland"
    },
    {
      image: "https://brand-uk.assets.kfc.co.uk/styles/original/s3/2022-10/W8_22_WEBSITE_CAROUSEL_DESKTOP_HW_1900x725.jpg?itok=gZt4EwuB",
    //   caption: "Darjeeling"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        {/* <h2>React Carousel Minimal</h2>
        <p>Easy to use, responsive and customizable carousel component for React Projects.</p> */}
        <div style={{
        //   padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={3000}
            width="100vw"
            height="500px"
            captionStyle={captionStyle}
            // radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100vw",
              maxHeight: "700px",
            //   margin: "40px auto",
              marginTop:"0px"
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CarouselComponent;