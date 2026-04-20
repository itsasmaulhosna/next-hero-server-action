"use client";

import {Envelope} from "@gravity-ui/icons";
import Script from "next/script";

import {Button, Input, Label, Modal, Surface, TextField,ListBox, Select} from "@heroui/react";

export function AddTask({creatATask}) {
  return (
    <Modal>
      <Button variant="secondary">Add a Task</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and well get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={creatATask} className="flex flex-col gap-4">
                  <TextField className="w-full" name="title" type="text">
                    <Label>title</Label>
                    <Input placeholder="Enter your task title" />
                  </TextField>
                  <TextField className="w-full" name="description" type="text">
                    <Label>description</Label>
                    <Input placeholder="Enter your task description" />
                  </TextField>
<Select className="w-[256px]" placeholder="Select one" variant="primary">
        <Label>priority</Label>
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            <ListBox.Item id="low" textValue="low">
              Low
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="medium" textValue="medium">
              Medium
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
      <Select className="w-[256px]" placeholder="Select one" variant="secondary">
        <Label>Status</Label>
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            <ListBox.Item id="pending" textValue="pending">
              Pending
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="inProgress" textValue="inProgress">
              In Progress
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>


                  <TextField className="w-full" name="message">
                    <Label>Assigen to</Label>
                    <Input placeholder="Enter your task assigen" />
                  </TextField>
                  <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit">Submit Task</Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}