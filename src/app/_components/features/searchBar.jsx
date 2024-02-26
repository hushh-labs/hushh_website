import { useState } from "react";
import { Input } from "@chakra-ui/react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const searchQueryTrimmed = searchQuery.trim().toLowerCase();
  
    // Clear previous highlighted text when the search query is cleared
    if (searchQueryTrimmed === "") {
      const elements = document.querySelectorAll(
        'h1, h2, h3, h4, h5, h6, p, span, div, input, button, textarea, a, [role="button"], [role="link"], [role="heading"], [role="textbox"], [role="textbox"], [role="textbox"], [role="presentation"], [role="textbox"], [role="textbox"], [role="list"], [role="listitem"], [role="option"], [role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"], [aria-label]'
      );
      elements.forEach((element) => {
        element.style.color = ""; // Reset color
      });
      return;
    }
  
    const searchWords = searchQueryTrimmed.split(" ");
    const elements = document.querySelectorAll(
      'h1, h2, h3, h4, h5, h6, p, span, div, input, button, textarea, a, [role="button"], [role="link"], [role="heading"], [role="textbox"], [role="textbox"], [role="textbox"], [role="presentation"], [role="textbox"], [role="textbox"], [role="list"], [role="listitem"], [role="option"], [role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"], [aria-label]'
    );
  
    let found = false;
    elements.forEach((element) => {
      const elementText = element.innerText.toLowerCase();
      if (searchWords.every((word) => elementText.includes(word))) {
        found = true;
        const yOffset = -220;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        element.style.color = "yellow";
        return;
      }
      element.style.color = ""; // Reset color
    }
    );
  
    if (!found) {
      alert(`"${searchQuery}" not found on this page.`);
    }
  };
  
  

  return (
    <Input
      placeholder="Search..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      variant="filled"
      borderRadius="none"
      width={'50%'}
      size="md"
      bg="black"
      _hover={{
        background:'none'
      }}
      border={"3px solid #606060"}
      _focus={{ color: "#FFFFFF",border:'1px solid #FFFFFF' }}
      _placeholder={{ color: "gray.400" }}
      px="4"
      py="2"
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          handleSearch();
        }
      }}
    />
  );
};

export default SearchBar;
