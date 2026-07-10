const defaultTabs = [
  { key: "all", label: "All" },
  { key: "music", label: "Music Events" },
  { key: "sports", label: "Sports" },
  { key: "comedy", label: "Comedy Shows" },
  { key: "plays", label: "Plays" },
  { key: "profile", label: "My Profile" }
];

function Tabs({ tabs = defaultTabs, activeTab, onTabChange }) {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <div
          key={tab.key}
          className={`tab ${activeTab === tab.key ? "active" : ""}`.trim()}
          onClick={() => onTabChange(tab.key)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
}

export default Tabs;