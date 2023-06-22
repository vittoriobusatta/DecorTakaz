import clientPromise from "../../libs/mongodb";

export default async function handler(req, res) {
  const mongoClient = await clientPromise;
  const data = await mongoClient.db().collection("Category").find({}).toArray();
  res.status(200).json(JSON.parse(JSON.stringify(data)));
}
