import { useEffect, useState } from "react";

function NavigationBar({ sections }) {
  const [ activeId, setState ] = useState(sections[0].id);

  const navigateTo = (sectionId) => {
    const section = document.querySelector(`section[id="${sectionId}"]`);
    if (section) {
      window.scrollTo(0, section.offsetTop - 54);
    }
  };
  const setActiveSection = (id) => {
    setState(id);
    navigateTo(id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setState(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [ sections ]);

  return (
    <nav>
      {
        sections.map((item) => (
          <p key={item.id} className={item.id === activeId ? "active" : ""} onClick={() => setActiveSection(item.id)}>{item.label}</p>
        ))
      }
    </nav>
  );
}

export default NavigationBar;
