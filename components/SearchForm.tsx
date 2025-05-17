import React from "react";
import Form from "next/form";
import SearchFormReset from "@/components/SearchFormReset";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchForm = async ({ query }: { query?: string }) => {
  return (
    <Form action={"/"} scroll={false} className="search-form">
      <input
        type="text"
        name="query"
        placeholder="Search Startups"
        className="search-input"
        defaultValue={query}
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <Button type="submit" className="search-btn text-white">
          <SearchIcon size={20} />
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
