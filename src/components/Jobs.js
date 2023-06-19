import React from 'react';

const JobContainer = () => {
  const jobs = [
    {
      title: 'React.js Deveoper',
      description: 'Required. Freshers at OSTTalent',
      link: 'https://www.osttalent.com/'
    },
    {
      title: 'Node.js Developer',
      description: '2-3 years exp. req. at OSTTalent',
      link: 'https://www.osttalent.com/'
    },
    {
      title: 'Fullstack Developer',
      description: '5-8 years exps. req. at OSTTalent',
      link: 'https://www.osttalent.com/'
    }
  ];

  const handleApply = (link) => {
    // window.location.href = link;
    window.open(link, '_blank');
  };

  return (
    <div style={{ border: '1px solid black', borderRadius: '15px', padding: '20px', width: '284px', left: '1180px', top: '990px', position: 'absolute' }}>
      <h2>Jobs</h2>
      {jobs.map((job, index) => (
        <div key={index} style={{ border: '1px solid gray', padding: '10px', margin: '10px 0', position: 'relative', borderRadius:'5  px' }}>
          <div style={{ marginBottom: '10px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>{job.title}</h3>
            <p style={{ fontSize: '12px' }}>{job.description}</p>
          </div>
          <button
            onClick={() => handleApply(job.link)}
            style={{
              position: 'absolute',
              bottom: '10px',
              right: '10px',
              background: '#00A3FF',
              borderRadius: '100px',
              color: 'white',
              fontSize: '12px'
            }}
          >
            Apply
          </button>
        </div>
      ))}
    </div>
  );
};

export default JobContainer;
