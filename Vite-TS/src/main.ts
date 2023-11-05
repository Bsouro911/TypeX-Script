import "./css/style.css";
import CompleteList from "./model/CompleteList";
import ListItem from "./model/ListItem";
import ListTemplate from "./template/ListTemplate";

const initApp = (): void => {
  const completeList = CompleteList.instance;
  const template = ListTemplate.instance;
  const itemEntryForm = document.getElementById(
    "itemEntryForm"
  ) as HTMLFormElement;

  itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault();

    // Get the new item value
    const input = document.getElementById("newItem") as HTMLInputElement;
    const newEntryText: string = input.value.trim();
    if (!newEntryText.length) return;

    // calculate item ID
    const itemId: number = completeList.list.length
      ? parseInt(completeList.list[completeList.list.length - 1].id) + 1
      : 1;

    // create new item
    const newItem = new ListItem(itemId.toString(), newEntryText);
    // Add new item to full list
    completeList.addItem(newItem);
    // Re-render list with new item included
    template.render(completeList);
    input.value = "";
  });

  // Add listener to "Clear" button
  const clearItems = document.getElementById(
    "clearItemsButton"
  ) as HTMLButtonElement;

  clearItems.addEventListener("click", (): void => {
    completeList.clearList();
    template.clear();
  });

  // load initial data
  completeList.load();
  // initial render of template
  template.render(completeList);
};

document.addEventListener("DOMContentLoaded", initApp);
