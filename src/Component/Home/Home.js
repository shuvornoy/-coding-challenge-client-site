import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Table from './../Table/Table';


function Home() {
  const [allData, setAllData] = useState([]);
  const [agree, setAgree] = useState(false);
  const [dataLoad, setDataLoad] = useState(false);

useEffect(() => {
  fetch("https://coding-challenge-server-lovat.vercel.app/users")
    .then((res) => res.json())
    .then((data) => setAllData(data));
}, [dataLoad]);
console.log(allData);

  const submitHandel = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const selecet = form.select.value;

    const user = { name, selecet, agree };
    console.log(user);
    fetch("https://coding-challenge-server-lovat.vercel.app/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully Your Data Store");
          setDataLoad(!dataLoad);
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  
  return (
    <div>
      <div className="text-center text-2xl font-bold">
        Please enter your name and pick the Sectors you are currently involved
        in.
      </div>
      <div className="mx-auto xl:w-96 lg:w-96 md:w-96 w-full p-2">
        <form onSubmit={(e) => submitHandel(e)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl">your name?</span>
            </label>
            <input
              name="name"
              required
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl">Sectors</span>
            </label>
            <select
              className="select select-bordered h-40"
              multiple=""
              size="5"
              name="select"
              required
            >
              <optgroup label="Manufacturing">
                <option value="Construction materials">
                  Construction materials
                </option>
                <option value="Electronics and Optics">
                  Electronics and Optics
                </option>
              </optgroup>
              <optgroup label="Food and Beverage">
                <option value="Bakery & confectionery products">
                  Bakery & confectionery products
                </option>
                <option value="Beverages">Beverages</option>
                <option value="Milk  dairy products">
                  Milk dairy products
                </option>
                <option value="Fish & fish products">
                  Fish & fish products
                </option>
                <option value="Meat & meat products">
                  Meat & meat products
                </option>
                <option value="Other">Other</option>
                <option value="Sweets & snack food">Sweets & snack food</option>
              </optgroup>
              <optgroup label="Furniture">
                <option value="Bathroom-sauna">Bathroom/sauna</option>
                <option value="Bedroom">Bedroom</option>
                <option value="Children-room">Children’s room</option>
                <option value="Office">Office</option>
                <option value="Other (Furniture)">Other (Furniture) </option>
                <option value="Outdoor">Outdoor</option>
                <option value="Project furniture">Project furniture</option>
              </optgroup>
              <optgroup label="Machinery">
                <option value="Bathroom-sMachinery components">
                  Machinery components
                </option>
                <option value="Machinery equipment/tools">
                  Machinery equipment/tools
                </option>
                <option value="Manufacture of machinery">
                  Manufacture of machinery
                </option>
              </optgroup>
              <optgroup label="Maritime">
                <option value="Aluminium and steel workboats">
                  Aluminium and steel workboats
                </option>
                <option value="oat/Yacht building">Boat/Yacht building</option>
                <option value="Ship repair and conversion">
                  Ship repair and conversion
                </option>
              </optgroup>
              <optgroup label="Metal structures">
                <option value="Other">Other</option>
                <option value="Repair and maintenance service">
                  Repair and maintenance service
                </option>
              </optgroup>
              <optgroup label="Metalworking">
                <option value="Construction of metal structures">
                  Construction of metal structures
                </option>
                <option value="Houses and buildings">
                  Houses and buildings
                </option>
                <option value="Metal products">Metal products</option>
              </optgroup>
              <optgroup label="Metal works">
                <option value="CNC-machining">CNC-machining</option>
                <option value="Forgings, Fasteners">Forgings, Fasteners</option>
                <option value="Gas, Plasma, Laser cutting">
                  Gas, Plasma, Laser cutting
                </option>
                <option value="MIG, TIG, Aluminum welding">
                  MIG, TIG, Aluminum welding
                </option>
              </optgroup>
              <optgroup label="Plastic and Rubber">
                <option value="Packaging">Packaging</option>
                <option value="Plastic goods">Plastic goods</option>
              </optgroup>
              <optgroup label="Plastic processing technology">
                <option value="Blowing">Blowing</option>
                <option value="Moulding">Moulding</option>
                <option value="Moulding">Moulding</option>
                <option value="Plastics welding and processing">
                  Plastics welding and processing
                </option>
                <option value="Plastic profiles">Plastic profiles</option>
              </optgroup>
              <optgroup label="Printing">
                <option value="Advertising">Advertising</option>
                <option value="Book/Periodicals printing">
                  Book/Periodicals printing
                </option>
                <option value="Labelling and packaging printing">
                  Labelling and packaging printing
                </option>
              </optgroup>
              <optgroup label="Textile and Clothing">
                <option value="Clothing">Clothing</option>
                <option value="Textile">Textile</option>
              </optgroup>
              <optgroup label="Wood">
                <option value="Other (Wood)">Other (Wood)</option>
                <option value="Wooden building materials">
                  Wooden building materials
                </option>
                <option value="Wooden houses">Wooden houses</option>
              </optgroup>
              <optgroup label="Other">
                <option value="Creative industries">Creative industries</option>
                <option value="Energy technology">Energy technology</option>
                <option value="Environment">Environment</option>
              </optgroup>
              <optgroup label="Service">
                <option value="Business services">Business services</option>
                <option value="Engineering">Engineering</option>
              </optgroup>
              <optgroup label="Information Technology and Telecommunications">
                <option value="Data processing, Web portals, E-marketing">
                  Data processing, Web portals, E-marketing
                </option>
                <option value="Programming, Consultancy">
                  Programming, Consultancy
                </option>
                <option value="Software, Hardware">Software, Hardware</option>
                <option value="Telecommunications">Telecommunications</option>
              </optgroup>
              <optgroup label="Tourism">
                <option value="Translation services">
                  Translation services
                </option>
              </optgroup>
              <optgroup label="Transport and Logistics">
                <option value="Air">Air</option>
                <option value="Rail">Rail</option>
                <option value="Road">Road</option>
                <option value="Water">Water</option>
              </optgroup>
            </select>
          </div>
          <div className="form-control my-6">
            <label className="flex">
              <span className="">Agree to terms</span>
              <div>
                <input
                  type="checkbox"
                  required
                  onClick={() => setAgree()}
                  className="checkbox checkbox-success ml-4"
                />
              </div>
            </label>
          </div>
          <button className="btn btn-success w-32">
            Save
          </button>
        </form>
      </div>
      {allData?.map((userData) => (
        <Table key={userData?._id} userData={userData}></Table>
      ))}
    </div>
  );
}

export default Home;
