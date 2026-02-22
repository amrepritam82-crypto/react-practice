import React from "react";

const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img shimmer-animate"></div>
      <div className="shimmer-content">
        <div className="shimmer-line shimmer-animate shimmer-title"></div>
        <div className="shimmer-line shimmer-animate shimmer-subtitle"></div>
        <div className="shimmer-meta">
          <div className="shimmer-line shimmer-animate shimmer-badge"></div>
          <div className="shimmer-line shimmer-animate shimmer-badge"></div>
        </div>
        <div className="shimmer-line shimmer-animate shimmer-short"></div>
        <div className="shimmer-line shimmer-animate shimmer-short"></div>
        <div className="shimmer-line shimmer-animate shimmer-xshort"></div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-grid">
      {Array(12)
        .fill("")
        .map((_, i) => (
          <ShimmerCard key={i} />
        ))}
    </div>
  );
};

export default Shimmer;