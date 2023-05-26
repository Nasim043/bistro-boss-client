
const SectionTitle = ({header, subHeader}) => {
  return (
    <div className="text-center md:w-4/12 mx-auto mb-7">
      <p className="text-yellow-600 mb-3">---{subHeader}---</p>
      <h3 className="border-y-2 text-3xl py-3">{header}</h3>
    </div>
  );
};

export default SectionTitle;