const getName = async (name: string) => {
  const res = await fetch(`https://api.agify.io?name=${name}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch name data: ${res.statusText}`);
  }
  return res.json();
}

const getGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io?name=${name}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch gender data: ${res.statusText}`);
  }
  return res.json();
}

const getCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io?name=${name}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch country data: ${res.statusText}`);
  }
  return res.json();
}

interface Params {
  params: { name: string }
}

const Page = async ({ params }: Params) => {
  try {
    const nameDataPromise = getName(params.name);
    const genderDataPromise = getGender(params.name);
    const countryDataPromise = getCountry(params.name);

    const [nameData, genderData, countryData] = await Promise.all([nameDataPromise, genderDataPromise, countryDataPromise]);

    return (
      <div className=" flex item-center justify-center bg-gray-800 ">
        <div className="p-4 shadow-md bg-white rounded-md bg-gray-600 hover:bg-blue-500 mt-8 mb-6">
        <h1 className="mb-4 font-bold text-yellow-500 text-2xl">Personal Information</h1>
          <p className="text-semibold text-orange-500 hover:text-black ">Name: {nameData.name}</p>
          <p className="text-semibold text-orange-500 hover:text-black">Age: {nameData.age}</p>
          <p className="text-semibold text-orange-500 hover:text-black">Gender: {genderData.gender}</p>
          <p className="text-semibold text-orange-500 hover:text-black">Country: {countryData.country[0]?.country_id}</p>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>Error loading data</div>;
  }
}

export default Page;
