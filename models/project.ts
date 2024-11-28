interface Project{
    id        :number,   
  team_id     :number,
  name        :string,
  description :string|undefined,
  start_date  :Date,
  end_date    :Date|undefined,
}

export default Project;