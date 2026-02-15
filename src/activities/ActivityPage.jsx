import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getActivities, deleteActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";

export default function ActivityPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  
  const [activity, setActivity] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivity = async () => {
      const data = await getActivities();
      const found = data.find(a => a.id === Number(id));
      setActivity(found);
    };
    fetchActivity();
  }, [id]);

  const tryDelete = async () => {
    setError(null);
    try {
      await deleteActivity(token, activity.id);
      navigate("/activities");
    } catch (e) {
      setError(e.message);
    }
  };

  if (!activity) return <p>Here at fullstack academy, we appreciate you being patient while we load your filez...</p>;

  return (
    <>
      <h1>{activity.name}</h1>
      <p>Description: {activity.description}</p>
      <p>Created by: {activity.creatorName}</p>
      {token && <button onClick={tryDelete}>Delete</button>}
      {error && <p role="alert">{error}</p>}
    </>
  );
}