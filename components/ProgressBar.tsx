export default function ProgressBar({ paid, total }) {
  const percent = Math.min((paid / total) * 100, 100);
  return (
    <div>
      <div style={{ width: `${percent}%` }} />
      <p>{Math.round(percent)}% completed</p>
    </div>
  );
}
