import React from 'react';
import './BCA.css';

const BCA = () => {
  // Mock file structure data
  const folders = [
    {
      name: 'First Semester',
      type: 'folder',
      items: [
        { name: 'Programming Fundamentals', type: 'folder' },
        { name: 'Mathematics', type: 'folder' },
        { name: 'Digital Logic', type: 'folder' },
      ],
    },
    {
      name: 'Second Semester',
      type: 'folder',
      items: [
        { name: 'Data Structures', type: 'folder' },
        { name: 'Discrete Mathematics', type: 'folder' },
        { name: 'Computer Organization', type: 'folder' },
      ],
    },
    {
      name: 'Third Semester',
      type: 'folder',
      items: [
        { name: 'Algorithms', type: 'folder' },
        { name: 'Database Systems', type: 'folder' },
        { name: 'Operating Systems', type: 'folder' },
      ],
    },
    {
      name: 'Project Resources',
      type: 'folder',
      items: [
        { name: 'Templates', type: 'folder' },
        { name: 'Sample Projects', type: 'folder' },
        { name: 'Guidelines.pdf', type: 'file' },
      ],
    },
  ];

  const openDrive = () => {
    window.open('https://drive.google.com/drive/folders/1ZYcaNYsy4CwnZ0Z9pp6DsiueUu-jqL4C?usp=drive_link', '_blank');
  };

  return (
    <div className="faculty-page server-ui">
      <div className="server-container">
        <div className="server-header">
          <div className="server-breadcrumbs">
            <span className="server-name">BCA Resource Server</span>
            <span className="server-path">/root/BCA_Materials</span>
          </div>
          <div className="server-actions">
            <button className="server-button" onClick={openDrive}>
              Open in Google Drive
            </button>
          </div>
        </div>
        
        <div className="server-content">
          <div className="file-browser">
            <div className="file-browser-header">
              <div className="file-header-name">Name</div>
              <div className="file-header-modified">Last Updated</div>
              <div className="file-header-size">Size</div>
            </div>
            
            <div className="file-browser-list">
              {folders.map((folder, index) => (
                <div className="file-item" key={index}>
                  <div className="file-icon">
                    {folder.type === 'folder' ? (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
                      </svg>
                    )}
                  </div>
                  <div className="file-name">{folder.name}</div>
                  <div className="file-modified">May 2024</div>
                  <div className="file-size">--</div>
                  <div className="file-action">
                    <button className="download-btn" onClick={openDrive}>
                      Open
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="server-info-panel">
            <h3>BCA Resource Server</h3>
            <p>This server contains all study materials for the Bachelor of Computer Applications program.</p>
            
            <div className="server-stats">
              <div className="stat-item">
                <span className="stat-label">Total Folders</span>
                <span className="stat-value">{folders.length}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Last Updated</span>
                <span className="stat-value">May 2024</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Storage Used</span>
                <span className="stat-value">2.4 GB</span>
              </div>
            </div>
            
            <div className="quick-links">
              <h4>Quick Links</h4>
              <button className="link-btn" onClick={openDrive}>
                Syllabus Documents
              </button>
              <button className="link-btn" onClick={openDrive}>
                Previous Year Papers
              </button>
              <button className="link-btn" onClick={openDrive}>
                Lab Manuals
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BCA;