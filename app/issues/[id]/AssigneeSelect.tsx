"use client";
import { Select } from "@radix-ui/themes";

const AssigneeSelect = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Assignee...">
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestion</Select.Label>
            <Select.Item value="1">Ihar Bahamaz</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Trigger>
    </Select.Root>
  );
};

export default AssigneeSelect;
