import { useState, useEffect } from "react";

export function ActivityFinder() {
  // Fetches a random activity
  const [participants, setParticipants] = useState(1);
  const [activity, setActivity] = useState(); //leave undefined as initial value due to no activity being selected

  useEffect(() => {
    let canSetActivity = true;
    fetch(`https://www.boredapi.com/api/activity?participants${participants}`)
      .then((response) => response.json())
      .then((json) => {
        if (canSetActivity) {
          setActivity(json.activity);
        }
      });

    return () => {
      canSetActivity = false;
    };
  }, [participants]);

  return (
    <div className="ActivityFinder componentBox">
      <h3>Activity Finder</h3>
      <label>
        Choose number of participants:
        <select
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
      <div>
        <strong>Suggested Activity: </strong>
        {activity}
      </div>
    </div>
  );
}
