import ExerciseCard from "./ExerciseCard";
import SectionWrapper from "./SectionWrapper";

export default function Workout(props) {
  const { workout } = props;
  return (
    <div>
      <SectionWrapper
        id={"workout"}
        header={"welcome to"}
        title={["The", "DANGEr", "zone"]}
      >
        <div className="flex flex-col gap-4">
          {workout.map((excercise, i) => {
            return <ExerciseCard excercise={excercise} key={i} i={i} />;
          })}
        </div>
      </SectionWrapper>
    </div>
  );
}
