import React from 'react';

const ResumeComponent = () => {
  return (
    <div className="max-w-3xl p-8 bg-[#fafafa] p-0">
      <header className="text-center">
        <h1 className="text-2xl font-bold">Loren Ipsum</h1>
        <div className="flex justify-center space-x-4 text-sm ">
          <span>+1 (911) 113-9126</span>
          <span>loren.ipsum@gmail.com</span>
          <a href="https://linkedin.com/in/lorenipsum" className="text-blue-600">Linked In</a>
          <a href="https://github.com/lorenipsum" className="text-blue-600">Github</a>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mt-1 mb-2">Education</h2>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold">ABC college</h3>
            <p className="text-sm italic">Loren ipsum degree, Loren ipsum</p>
          </div>
          <span className="text-sm">Jul 2001 - Jul 2001</span>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Experience</h2>
        {[1, 2].map((_, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h3>
              <span className="text-sm">Nov 1005 - Present</span>
            </div>
            <p className="text-sm italic">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <ul className="list-disc list-inside text-sm mt-2">
              <li>Ut purus elit, vestibulum ut, placerat ac, adipiscing vitae, felis.</li>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Curabitur dictum gravida mauris.</li>
              <li>Donec vehicula augue eu neque.</li>
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Projects</h2>
        {[1, 2].map((_, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h3>
              <span className="text-sm">Nov 1005 - Present</span>
            </div>
            <p className="text-sm italic">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <ul className="list-disc list-inside text-sm mt-2">
              <li>Ut purus elit, vestibulum ut, placerat ac, adipiscing vitae, felis.</li>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Mauris ut leo.</li>
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Achievements</h2>
        <ul className="list-disc list-inside text-sm">
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Ut purus elit, vestibulum ut, placerat ac, adipiscing vitae, felis.</li>
        </ul>
      </section>
    </div>
  );
};

export default ResumeComponent;