import React from 'react';
import './BCA.css';

const BSCIT = () => {
  // Central configuration for all storage links
  const config = {
    storageProvider: 'google', // Change to 'mega' to switch providers
    links: {
      google: {
        root: 'https://drive.google.com/drive/folders/BSCIT_ROOT_FOLDER_ID',
        semesters: {
          first: 'https://drive.google.com/drive/folders/BSCIT_FIRST_SEM_ID',
          second: 'https://drive.google.com/drive/folders/BSCIT_SECOND_SEM_ID',
          third: 'https://drive.google.com/drive/folders/BSCIT_THIRD_SEM_ID',
          fourth: 'https://drive.google.com/drive/folders/BSCIT_FOURTH_SEM_ID',
          fifth: 'https://drive.google.com/drive/folders/BSCIT_FIFTH_SEM_ID',
          sixth: 'https://drive.google.com/drive/folders/BSCIT_SIXTH_SEM_ID',
          seventh: 'https://drive.google.com/drive/folders/BSCIT_SEVENTH_SEM_ID',
          eighth: 'https://drive.google.com/drive/folders/BSCIT_EIGHTH_SEM_ID',
          additional: 'https://drive.google.com/drive/folders/BSCIT_ADDITIONAL_RESOURCES_ID'
        }
      },
      mega: {
        root: 'https://mega.nz/folder/BSCIT_MEGA_ROOT_ID',
        semesters: {
          first: 'https://mega.nz/folder/BSCIT_MEGA_FIRST_SEM_ID',
          second: 'https://mega.nz/folder/BSCIT_MEGA_SECOND_SEM_ID',
          // ... other Mega links
        }
      }
    }
  };

  // Get current storage links based on provider
  const storage = config.links[config.storageProvider];

  // Complete semester data with links (BSCIT specific)
  const folders = [
    {
      name: 'First Semester',
      type: 'folder',
      link: storage.semesters.first,
      items: [
        { name: 'Programming Principles', type: 'folder' },
        { name: 'Mathematics for IT', type: 'folder' },
        { name: 'Computer Organization', type: 'folder' },
        { name: 'Communication Skills', type: 'folder' },
        { name: 'IT Fundamentals', type: 'folder' }
      ],
      lastUpdated: 'June 2024'
    },
    {
      name: 'Second Semester',
      type: 'folder',
      link: storage.semesters.second,
      items: [
        { name: 'Data Structures', type: 'folder' },
        { name: 'Database Concepts', type: 'folder' },
        { name: 'Web Technologies', type: 'folder' },
        { name: 'Business Processes', type: 'folder' },
        { name: 'Object-Oriented Programming', type: 'folder' }
      ],
      lastUpdated: 'June 2024'
    },
    {
      name: 'Third Semester',
      type: 'folder',
      link: storage.semesters.third,
      items: [
        { name: 'Computer Networks', type: 'folder' },
        { name: 'Operating Systems', type: 'folder' },
        { name: 'Software Engineering', type: 'folder' },
        { name: 'System Analysis & Design', type: 'folder' },
        { name: 'Java Programming', type: 'folder' }
      ],
      lastUpdated: 'May 2024'
    },
    {
      name: 'Fourth Semester',
      type: 'folder',
      link: storage.semesters.fourth,
      items: [
        { name: 'Network Security', type: 'folder' },
        { name: 'Advanced Databases', type: 'folder' },
        { name: 'Web Application Development', type: 'folder' },
        { name: 'Mobile Computing', type: 'folder' },
        { name: 'Python Programming', type: 'folder' }
      ],
      lastUpdated: 'May 2024'
    },
    {
      name: 'Fifth Semester',
      type: 'folder',
      link: storage.semesters.fifth,
      items: [
        { name: 'Cloud Computing', type: 'folder' },
        { name: 'Information Security', type: 'folder' },
        { name: 'Data Analytics', type: 'folder' },
        { name: 'Enterprise Systems', type: 'folder' },
        { name: 'IT Project Management', type: 'folder' }
      ],
      lastUpdated: 'April 2024'
    },
    {
      name: 'Sixth Semester',
      type: 'folder',
      link: storage.semesters.sixth,
      items: [
        { name: 'Artificial Intelligence', type: 'folder' },
        { name: 'Internet of Things', type: 'folder' },
        { name: 'Big Data Technologies', type: 'folder' },
        { name: 'Cyber Security', type: 'folder' },
        { name: 'Project Work I', type: 'folder' }
      ],
      lastUpdated: 'April 2024'
    },
    {
      name: 'Seventh Semester',
      type: 'folder',
      link: storage.semesters.seventh,
      items: [
        { name: 'Machine Learning', type: 'folder' },
        { name: 'Blockchain Technology', type: 'folder' },
        { name: 'DevOps Practices', type: 'folder' },
        { name: 'IT Governance', type: 'folder' },
        { name: 'Elective Subjects', type: 'folder' }
      ],
      lastUpdated: 'March 2024'
    },
    {
      name: 'Eighth Semester',
      type: 'folder',
      link: storage.semesters.eighth,
      items: [
        { name: 'Advanced Cyber Security', type: 'folder' },
        { name: 'Cloud Architecture', type: 'folder' },
        { name: 'IT Service Management', type: 'folder' },
        { name: 'Industry Internship', type: 'folder' },
        { name: 'Final Project', type: 'folder' }
      ],
      lastUpdated: 'March 2024'
    },
    {
      name: 'Additional Resources',
      type: 'folder',
      link: storage.semesters.additional,
      items: [
        { name: 'Exam Papers', type: 'folder' },
        { name: 'Practical Manuals', type: 'folder' },
        { name: 'Course Syllabus', type: 'folder' },
        { name: 'Technical References', type: 'folder' },
        { name: 'Video Lectures', type: 'folder' }
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
            <span className="server-name">BSCIT Study Materials</span>
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

export default BSCIT;