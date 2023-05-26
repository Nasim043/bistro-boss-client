import featureImg from '../../../src/assets/home/featured.jpg'
import SectionTitle from '../../components/SectionTitle';
import './features.css'
const Features = () => {
  return (
    <div className='feature-image bg-fixed pt-8 my-12'>
      <SectionTitle
        subHeader="Check it out"
        header="FROM OUR MENU"
      >

      </SectionTitle>
      <div className='md:flex justify-center items-center gap-4 py-12 px-8'>
        <div>
          <img src={featureImg} />
        </div>
        <div>
          <h4 className='text-3xl'>March 20, 2023</h4>
          <h3 className='text-2xl'>WHERE CAN I GET SOME?</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quod molestias, cupiditate officiis voluptatibus, suscipit pariatur in natus reiciendis saepe similique harum eius sit dolor, officia commodi nemo ipsum. Corrupti ex expedita quis nisi labore perferendis laboriosam
            fugiat sapiente voluptatum perspiciatis ipsam aspernatur, reprehenderit rem, doloribus, amet cum omnis. Quas.</p>

        </div>
      </div>
    </div>
  );
};

export default Features;