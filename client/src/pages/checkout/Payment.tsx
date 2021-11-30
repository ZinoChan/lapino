import { CreditCardOutlined, LockOutlined } from '@ant-design/icons';
import Button from 'components/UI/Button';

const Payment = () => {
  return (
    <section className="py-10">
      <h1 className="text-center text-3xl font-main font-bold mb-4">Payment</h1>
      <div className=" max-w-screen-md mx-auto bg-white p-4 shadow-md rounded">
        <div className="w-full text-center mb-4">
          <div className="bg-primary text-white overflow-hidden rounded-full w-20 h-20  mx-auto shadow-lg flex justify-center items-center">
            <CreditCardOutlined className="text-white text-2xl" />
          </div>
        </div>

        <div className="mb-3 flex ">
          <div className="px-2">
            <label className="flex items-center cursor-pointer">
              <input type="radio" className="form-radio h-5 w-5 text-primary" name="type" id="type1" />
              <img
                src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                alt="visa"
                className="h-8 ml-3"
              />
            </label>
          </div>
          <div className="px-2">
            <label className="flex items-center cursor-pointer">
              <input type="radio" className="form-radio h-5 w-5 text-primary" name="type" id="type2" />
              <img
                src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                alt="visa"
                className="h-8 ml-3"
              />
            </label>
          </div>
        </div>
        <form className="p-4">
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
            <div>
              <input
                className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-primary transition-colors"
                placeholder="John Smith"
                type="text"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4  mb-3">
            <div className="col-span-2">
              <label className="font-bold text-sm mb-2 ml-1">Card number</label>
              <div>
                <input
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-primary transition-colors"
                  placeholder="0000 0000 0000 0000"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label className="font-bold text-sm mb-2 ml-1">Security code</label>
              <div>
                <input
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-primary transition-colors"
                  placeholder="000"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="mb-3 -mx-2 flex items-end">
            <div className="px-2 w-1/2">
              <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
              <div>
                <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-primary transition-colors cursor-pointer">
                  <option value="01">01 - January</option>
                  <option value="02">02 - February</option>
                  <option value="03">03 - March</option>
                  <option value="04">04 - April</option>
                  <option value="05">05 - May</option>
                  <option value="06">06 - June</option>
                  <option value="07">07 - July</option>
                  <option value="08">08 - August</option>
                  <option value="09">09 - September</option>
                  <option value="10">10 - October</option>
                  <option value="11">11 - November</option>
                  <option value="12">12 - December</option>
                </select>
              </div>
            </div>
            <div className="px-2 w-1/2">
              <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-primary transition-colors cursor-pointer">
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <Button theme="btn-large" className="flex items-center">
              <LockOutlined className="text-white mr-2" /> Confirm
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Payment;