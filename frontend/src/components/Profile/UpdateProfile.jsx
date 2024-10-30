import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Loader2, X } from 'lucide-react' // Importing the close icon

const UpdateProfile = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}> {/* Control open state here */}
        <DialogContent className="bg-white sm:max-w-[425px]">
          {/* Close Button */}
          <Button onClick={() => setOpen(false)}>Close</Button>
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Name</Label>
                <Input id="name" name="name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">Email</Label>
                <Input id="email" name="email" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number" className="text-right">Number</Label>
                <Input id="number" name="number" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">Bio</Label>
                <Input id="bio" name="bio" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">Skills</Label>
                <Input id="skills" name="skills" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-right">Resume</Label>
                <Input type="file" accept="application/pdf" id="file" name="file" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              {loading ? (
                <Button className="w-full my-4" disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait...
                </Button>
              ) : (
                <Button variant="outline" className="w-full my-4 bg-[#007bff] hover:bg-[#0568d1]">
                  Update
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default UpdateProfile
