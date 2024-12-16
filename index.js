export default function handler(req, res) {
  const data = {
    owner: "SiamTheFrog",
  };
  res.status(200).json(data);
}
