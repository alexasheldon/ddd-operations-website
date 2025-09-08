const teamMembers = [
  { name: "Lexi Yelle", role: "Vice President of Operations" },
  { name: "Sarah Grace Brown", role: "Director of Member Finances" },
  { name: "Bethany Gorman", role: "Director of Facility Operations" },
  { name: "Ava Johnson", role: "Director of Financial Operations" },
  { name: "Catherine Ryan", role: "Director of Administration" },
];

document.getElementById("teamSearch").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filteredMembers = teamMembers.filter(member =>
    member.name.toLowerCase().includes(query) ||
    member.role.toLowerCase().includes(query)
  );

  const teamList = document.getElementById("teamList");
  teamList.innerHTML = "";
  filteredMembers.forEach(member => {
    const li = document.createElement("li");
    li.textContent = `${member.name} - ${member.role}`;
    teamList.appendChild(li);
  });
});
// Hide results when clicking outside the input field
document.getElementById("teamSearch").addEventListener("blur", function () {
  document.getElementById("teamList").innerHTML = ""; // Clear results
});
