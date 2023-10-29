
function createMemberContainer(member) {
    const memberContainer = document.createElement('div');
    memberContainer.classList.add('member-container');
  
    const memberImage = document.createElement('img');
    memberImage.classList.add('member-images');
    memberImage.src = member.img;
    memberImage.alt = member.title;


    const memberDetails = document.createElement('div');
    memberDetails.classList.add('member-details');
  
    const title = document.createElement('div');
    title.classList.add('member-titles');
    title.innerHTML = `<strong>Title:</strong> ${member.title}`;
  
    const name = document.createElement('div');
    name.classList.add('member-names');
    name.innerHTML = `<strong>Director:</strong> ${member.name}`;
  
  
    memberDetails.appendChild(title);
    memberDetails.appendChild(name);
  
    memberContainer.appendChild(memberImage);
    memberContainer.appendChild(memberDetails);
  
    return memberContainer;
  }
  
  
  
  
  
  
  const getMembers = async () => {
    const url = "https://aydenwells.github.io/json/team.json"; 
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch team members data.");
      }
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showMembers = async () => {
    let members = await getMembers();
    let membersContainer = document.getElementById("members-containers");
  
    members.forEach((member) => {
      membersContainer.append(createMemberContainer(member));
    });
  };
  
  
  window.onload = () => showMembers();
  
  
