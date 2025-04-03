import { useGetAllAchievementQuery } from "../../../redux/Features/Achievements/achievementsApi";
import AchievementCard from "./AchievementCard";

type TAchievement = {
  _id: string;
  name: string;
  organization: string;
  image: string;
  completedAt: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const Achievements = () => {
  const { data } = useGetAllAchievementQuery({});

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-11 mt-12">
      {data?.data?.map((achievement: TAchievement) => (
        <AchievementCard
          key={achievement._id}
          {...achievement}
          isDeleteBtnNeeded={false}
        />
      ))}
    </div>
  );
};

export default Achievements;
