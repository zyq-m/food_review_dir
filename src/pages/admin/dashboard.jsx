import { Layout } from "../../components";

const Dashboard = () => {
  return (
    <Layout>
      <div
        className="hero min-h-72"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/7574741/pexels-photo-7574741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold">Dahsboard</h1>
          </div>
        </div>
      </div>
      <div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Downloads</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
