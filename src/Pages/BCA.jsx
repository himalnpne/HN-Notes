import React from 'react';
import './BCA.css';

const BCA = () => {
  // Central configuration for all storage links
  const config = {
    storageProvider: 'google', // Change to 'mega' to switch providers
    links: {
      google: {
        root: 'https://drive.google.com/drive/folders/ROOT_FOLDER_ID',
        semesters: {
          first: 'https://drive.google.com/drive/folders/FIRST_SEM_ID',
          second: 'https://drive.google.com/drive/folders/SECOND_SEM_ID',
          third: 'https://drive.google.com/drive/folders/THIRD_SEM_ID',
          fourth: 'https://drive.google.com/drive/folders/FOURTH_SEM_ID',
          fifth: 'https://drive.google.com/drive/folders/FIFTH_SEM_ID',
          sixth: 'https://drive.google.com/drive/folders/SIXTH_SEM_ID',
          seventh: 'https://drive.google.com/drive/folders/SEVENTH_SEM_ID',
          eighth: 'https://drive.google.com/drive/folders/EIGHTH_SEM_ID',
          additional: 'https://drive.google.com/drive/folders/ADDITIONAL_RESOURCES_ID'
        }
      },
      mega: {
        root: 'https://mega.nz/folder/MEGA_ROOT_ID',
        semesters: {
          first: 'https://mega.nz/folder/MEGA_FIRST_SEM_ID',
          second: 'https://mega.nz/folder/MEGA_SECOND_SEM_ID',
          // ... other Mega links
        }
      }
    }
  };

  // Get current storage links based on provider
  const storage = config.links[config.storageProvider];

  // Complete semester data with links
  const folders = [
    {
      name: 'First Semester',
      type: 'folder',
      link: storage.semesters.first,
      items: [
        { name: 'Programming Fundamentals', type: 'folder' },
        { name: 'Mathematics I', type: 'folder' },
        { name: 'Digital Logic', type: 'folder' },
        { name: 'English Communication', type: 'folder' },
        { name: 'Computer Fundamentals', type: 'folder' }
      ],
      lastUpdated: 'June 2024'
    },
    {
      name: 'Second Semester',
      type: 'folder',
      link: storage.semesters.second,
      items: [
        { name: 'Data Structures', type: 'folder' },
        { name: 'Discrete Mathematics', type: 'folder' },
        { name: 'Computer Organization', type: 'folder' },
        { name: 'Business Systems', type: 'folder' },
        { name: 'C Programming', type: 'folder' }
      ],
      lastUpdated: 'June 2024'
    },
    {
      name: 'Third Semester',
      type: 'folder',
      link: storage.semesters.third,
      items: [
        { name: 'Algorithms', type: 'folder' },
        { name: 'Database Systems', type: 'folder' },
        { name: 'Operating Systems', type: 'folder' },
        { name: 'Computer Networks', type: 'folder' },
        { name: 'Object Oriented Programming', type: 'folder' }
      ],
      lastUpdated: 'May 2024'
    },
    {
      name: 'Fourth Semester',
      type: 'folder',
      link: storage.semesters.fourth,
      items: [
        { name: 'Software Engineering', type: 'folder' },
        { name: 'Web Programming', type: 'folder' },
        { name: 'Java Programming', type: 'folder' },
        { name: 'Numerical Methods', type: 'folder' },
        { name: 'System Analysis and Design', type: 'folder' }
      ],
      lastUpdated: 'May 2024'
    },
    {
      name: 'Fifth Semester',
      type: 'folder',
      link: storage.semesters.fifth,
      items: [
        { name: 'Python Programming', type: 'folder' },
        { name: 'Computer Graphics', type: 'folder' },
        { name: 'Microprocessor', type: 'folder' },
        { name: 'Data Communication', type: 'folder' },
        { name: 'Internet Technologies', type: 'folder' }
      ],
      lastUpdated: 'April 2024'
    },
    {
      name: 'Sixth Semester',
      type: 'folder',
      link: storage.semesters.sixth,
      items: [
        { name: 'Artificial Intelligence', type: 'folder' },
        { name: 'Cloud Computing', type: 'folder' },
        { name: 'Mobile Application Development', type: 'folder' },
        { name: 'Information Security', type: 'folder' },
        { name: 'Project Work', type: 'folder' }
      ],
      lastUpdated: 'April 2024'
    },
    {
      name: 'Seventh Semester',
      type: 'folder',
      link: storage.semesters.seventh,
      items: [
        { name: 'Machine Learning', type: 'folder' },
        { name: 'Big Data Analytics', type: 'folder' },
        { name: 'Internet of Things', type: 'folder' },
        { name: 'Advanced Database Systems', type: 'folder' },
        { name: 'Elective Subjects', type: 'folder' }
      ],
      lastUpdated: 'March 2024'
    },
    {
      name: 'Eighth Semester',
      type: 'folder',
      link: storage.semesters.eighth,
      items: [
        { name: 'Blockchain Technology', type: 'folder' },
        { name: 'Cyber Security', type: 'folder' },
        { name: 'Project Management', type: 'folder' },
        { name: 'Internship Materials', type: 'folder' },
        { name: 'Final Project', type: 'folder' }
      ],
      lastUpdated: 'March 2024'
    },
    {
      name: 'Additional Resources',
      type: 'folder',
      link: storage.semesters.additional,
      items: [
        { name: 'Previous Year Papers', type: 'folder' },
        { name: 'Lab Manuals', type: 'folder' },
        { name: 'Syllabus', type: 'folder' },
        { name: 'Reference Books', type: 'folder' },
        { name: 'Tutorial Videos', type: 'folder' }
      ],
      lastUpdated: 'June 2024'
    }
  ];

  const openFolder = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="faculty-page server-ui">
      <div className="server-container">
        <div className="server-header">
          <div className="server-breadcrumbs">
            <span className="server-name">BCA Study Materials</span>
            <span className="server-path">/Semesters</span>
          </div>
          <div className="server-actions">
            <button 
              className="server-button" 
              onClick={() => openFolder(storage.root)}
            >
              {`Open in ${config.storageProvider === 'google' ? 'Google Drive' : 'MEGA'}`}
            </button>
          </div>
        </div>
        
        <div className="server-content">
          <div className="file-browser">
            <div className="file-browser-header">
              <div className="file-header-name">Semester</div>
              <div className="file-header-modified">Last Updated</div>
              <div className="file-header-size">Subjects</div>
            </div>
            
            <div className="file-browser-list">
              {folders.map((folder, index) => (
                <div className="file-item" key={index}>
                  <div className="file-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
                    </svg>
                  </div>
                  <div className="file-name">{folder.name}</div>
                  <div className="file-modified">{folder.lastUpdated}</div>
                  <div className="file-size">{folder.items.length}</div>
                  <div className="file-action">
                    <button 
                      className="download-btn" 
                      onClick={() => openFolder(folder.link)}
                    >
                      Open
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BCA;