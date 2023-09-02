import { useState } from "react";
import { clients as initialClients } from "../constants";
import styles from "../style";

const Clients = () => {
  const [clients, setClients] = useState(initialClients);

  return (
    <section className={`${styles.flexCenter} my-4`} id="get_started">
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div 
            key={client.id} 
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
            onMouseEnter={() => {
              const updatedClients = clients.map(c => {
                if (c.id === client.id) {
                  c.isHovered = true;
                }
                return c;
              });
              setClients(updatedClients);
            }}
            onMouseLeave={() => {
              const updatedClients = clients.map(c => {
                if (c.id === client.id) {
                  c.isHovered = false;
                }
                return c;
              });
              setClients(updatedClients);
            }}
          >
            <img 
                src={client.logo} 
                alt="client_logo" 
                className="sm:w-[192px] w-[100px] object-contain" 
                style={{
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                  opacity: client.isHovered ? '1' : '0.7'
                }}
              />

          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
