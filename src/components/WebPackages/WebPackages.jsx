const WebPackages = ({ t, packages, title, price, extraClasses }) => {
  return (
    <div className="bg-white m-3">
      <h1 className={`text-center font-bold text-2xl ${extraClasses} p-2 mb-3`}>
        {title}(€{price})
      </h1>
      <div>
        <ul className="list-decimal ml-5 p-3">
          {packages.map((pkg) => {
            if (pkg?.nested) {
              return (
                <li key={pkg.id}>
                  {t(pkg.title)}
                  <ul className="list-disc ml-5">
                    {pkg.data.map((data) => (
                      <li
                        key={data.id}
                        dangerouslySetInnerHTML={{ __html: t(data.title) }}
                      ></li>
                    ))}
                  </ul>
                </li>
              );
            } else {
              return (
                <li
                  key={pkg.id}
                  dangerouslySetInnerHTML={{ __html: t(pkg.title) }}
                ></li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default WebPackages;
