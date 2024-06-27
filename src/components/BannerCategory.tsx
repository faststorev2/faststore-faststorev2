interface BannerCategoryProps {
  offerEnabled: boolean;
  image: string;
  mobileImage: string;
  url: string;
  alt: string;
  text: string;
  text2: string;
  dayActive: string;
}

function BannerCategory(props: BannerCategoryProps) {
  if (!props.offerEnabled) {
    return null;
  }

  return (
    <div className="banner-category">
      <a href={props.url}>
        <picture>
          <source media="(max-width: 767px)" srcSet={props.mobileImage} />
          <img src={props.image} alt={props.alt} />
        </picture>
      </a>
      <div className="banner-text">
        <p>{props.text}</p>
        <p>{props.text2}</p>
      </div>
    </div>
  );
};

export default BannerCategory;
